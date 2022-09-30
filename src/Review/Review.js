

export default function Review({person}) {
  return (
    <div className="flex flex-col justify-center items-center max-w-[500px] min-w-[500px]">
        <img src={person.image} height={60} width={60} alt="avatar" className="rounded-[999px]" />
        <div className="text-xl capitalize text-zinc-800 font-medium ">{person.name}</div>
        <div className="text-lg text-zinc-800 capitalize">{person.designation}</div>
        <div className="place-self-start align-bottom"><img className="w-3 text-zinc-800" src="quote-left-solid.svg"></img></div>
        <div className="px-4"><div className="border rounded p-2 border-black text-md text-left text-zinc-600 text-center px-5">{person.review}</div></div>
        <div className="place-self-end "><img className="w-3 text-zinc-800" src="quote-right-solid.svg"></img></div>
    </div>
  )
}
