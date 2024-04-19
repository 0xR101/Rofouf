function GenreCard({name, children}) {
  return (
    <>
      <div className="rounded-md bg-secondaryColor text-center gap-2 w-32 h-32 flex flex-col items-center justify-center text-primary shadow-2xl hover:bg-primary hover:text-white">
        
        {children}
        <div className="font-bold">{name}</div>
      </div>
    </>
  );
}

export default GenreCard;
