import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "No video file was provided." },
        { status: 400 },
      );
    }

    const cloudName =
      process.env.CLOUDINARY_CLOUD_NAME ||
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    const uploadPreset =
      process.env.CLOUDINARY_UPLOAD_PRESET ||
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      return NextResponse.json(
        {
          error:
            "Cloudinary is not configured on the server. Add CLOUDINARY_CLOUD_NAME and CLOUDINARY_UPLOAD_PRESET.",
        },
        { status: 500 },
      );
    }

    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append("file", file, file.name);
    cloudinaryFormData.append("upload_preset", uploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
      {
        method: "POST",
        body: cloudinaryFormData,
      },
    );

    const data = (await response.json()) as {
      secure_url?: string;
      public_id?: string;
      resource_type?: string;
      error?: { message?: string };
    };

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            data?.error?.message ||
            "The video upload to Cloudinary failed.",
        },
        { status: response.status },
      );
    }

    return NextResponse.json({
      secure_url: data.secure_url,
      public_id: data.public_id,
      resource_type: data.resource_type,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unknown error while uploading the video.";

    return NextResponse.json(
      { error: message },
      { status: 500 },
    );
  }
}
