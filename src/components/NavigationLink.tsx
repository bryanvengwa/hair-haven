interface Props {
  children: React.ReactNode
  name: string
}

const NavigationLink = ({ children, name }: Props) => {
  return (
    <a
      href="#"
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-900 text-black hover:text-neutral-400 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      <p className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide">
        {name}
      </p>
    </a>
  )
}

export default NavigationLink
