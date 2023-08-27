import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

export default function ListItem({ post }: { post: Blogpost }) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className={"mt-4 text-2xl"}>
      <Link className={"underline hover:text-black/70"} href={`/posts/${id}`}>
        {title}
      </Link>
      <br />
      <p className={"text-sm mt-1"}>{formattedDate}</p>
    </li>
  );
}
