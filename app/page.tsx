import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from 'next/image';
import profilePic from './Gulfstream-G800.jpg';


export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}