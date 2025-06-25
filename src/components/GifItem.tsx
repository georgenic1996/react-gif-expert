 interface GifImage {
  id: string;
  title: string;
  url: string;
}

export const GifItem = ({title,url,id}:GifImage) => {
    console.log({title,url,id})
  return (
        <div className="card">

            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
  )
}
