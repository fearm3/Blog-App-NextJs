import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting-started-with-Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack apps and sites a breeze and ships with built-in SSR",
    date: "2020-02-26",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting-started-with-Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack apps and sites a breeze and ships with built-in SSR",
    date: "2020-02-26",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting-started-with-Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack apps and sites a breeze and ships with built-in SSR",
    date: "2020-02-26",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting-started-with-Nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack apps and sites a breeze and ships with built-in SSR",
    date: "2020-02-26",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
