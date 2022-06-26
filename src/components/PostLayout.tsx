//Recent posts

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <div className="flex">
            <main>
                {children}
            </main>
            <div>
                <h1>Recent posts</h1>
            </div>
        </div>
    </>
  );
}