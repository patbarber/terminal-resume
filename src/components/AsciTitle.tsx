export default function AsciTitle() {
  const banner = [
    "██████╗  █████╗ ████████╗██████╗ ██╗ ██████╗██╗  ██╗    ██████╗  █████╗ ██████╗ ██████╗ ███████╗██████╗\n",
    "██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██║██╔════╝██║ ██╔╝    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗\n",
    "██████╔╝███████║   ██║   ██████╔╝██║██║     █████╔╝     ██████╔╝███████║██████╔╝██████╔╝█████╗  ██████╔╝\n",
    "██╔═══╝ ██╔══██║   ██║   ██╔══██╗██║██║     ██╔═██╗     ██╔══██╗██╔══██║██╔══██╗██╔══██╗██╔══╝  ██╔══██╗\n",
    "██║     ██║  ██║   ██║   ██║  ██║██║╚██████╗██║  ██╗    ██████╔╝██║  ██║██║  ██║██████╔╝███████╗██║  ██║\n",
    "╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝\n",
  ];
  return (
    <div className="dark:text-white text-black whitespace-pre-wrap ">
      {banner}
      <p className="mt-2 ">
        Welcome to my interactive web terminal, here you can find my contact
        information, github and resume
      </p>
      <p>type <span className="glow">'help'</span> to see a series of commands</p>
    </div>
  );
}
