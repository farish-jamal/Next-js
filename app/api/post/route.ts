import { NextResponse } from 'next/server';
import connectDB from '@/config/mongodb';
import Post, { PostInterface } from '@/model/post.model';

export async function GET() {
  try {
    await connectDB();
    const posts: PostInterface[] = await Post.find({});
    return NextResponse.json({ success: true, data: posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch posts ' + error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const { description, title } = await req.json();
    if (!description || !title) {
      return NextResponse.json(
        { success: false, error: 'Title and description are required' },
        { status: 400 }
      );
    }
    const posts: PostInterface = await Post.create({
      description,
      title
    });
    return NextResponse.json({ success: true, data: posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch posts ' + error }, { status: 500 });
  }
}
