export default function AsciTitle() {
  const banner = [
    "██████╗  █████╗ ████████╗██████╗ ██╗ ██████╗██╗  ██╗    ██████╗  █████╗ ██████╗ ██████╗ ███████╗██████╗  \n",
    "██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██║██╔════╝██║ ██╔╝    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗ \n",
    "██████╔╝███████║   ██║   ██████╔╝██║██║     █████╔╝     ██████╔╝███████║██████╔╝██████╔╝█████╗  ██████╔╝ \n",
    "██╔═══╝ ██╔══██║   ██║   ██╔══██╗██║██║     ██╔═██╗     ██╔══██╗██╔══██║██╔══██╗██╔══██╗██╔══╝  ██╔══██╗ \n",
    "██║     ██║  ██║   ██║   ██║  ██║██║╚██████╗██║  ██╗    ██████╔╝██║  ██║██║  ██║██████╔╝███████╗██║  ██║ \n",
    "╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝ \n",
  ];
  return (
    <div className="dark:text-white text-black whitespace-pre-wrap">
      <pre className="typewriter">{banner}</pre>
      <pre className="mt-2 typewriter">
        Welcome to my interactive web terminal, here you can find my contact
        information, github and resume.
      </pre>
      <pre className="mt-2 typewriter">
        Type <span className="glow">'help'</span> to see a series of commands
      </pre>
    </div>
  );
}
