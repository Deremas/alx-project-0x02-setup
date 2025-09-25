import { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";
import { INITIAL_POSTS } from "@/constants";
import { Post } from "@/interfaces";

const home = () => {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center">Home Page</h1>

        <section className="flex justify-end mt-4 mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            + Add New Post
          </button>
        </section>

        {/* Render Cards dynamically from posts */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </section>

        {/* Post Modal for adding new posts */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </>
  );
};

export default home;
