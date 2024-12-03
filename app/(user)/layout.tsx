/** @format */

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className='w-screen bg-teal-700'>Ceritanya Navbar</nav>

      {children}
    </section>
  );
}
