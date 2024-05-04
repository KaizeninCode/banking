import  Sidebar  from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: 'Phil', lastName: 'Wekullo'}
  return (
    <main className="flex w-full h-screen font-inter">
        <Sidebar user={loggedIn}/>
        {children}
    </main>
  );
}
