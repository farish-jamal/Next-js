import mongoose, { Schema, Document, Model } from 'mongoose';

export interface PostInterface extends Document {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema<PostInterface> = new Schema(
  {
    description: {
      type: String,
    },
    title: {
      type: String,
    }
  },{ timestamps: true }
);

const Post: Model<PostInterface> = mongoose.models.Post || mongoose.model<PostInterface>('Post', PostSchema);

export default Post;
