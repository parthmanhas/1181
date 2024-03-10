interface Tag {
    tagName: string
}

export default function Tag({ props }: { props: Tag }) {
    return (
        <div className="mr-2">
            <p className="text-purple-700 font-medium px-3 bg-purple-100 inline-block rounded-3xl">#{props.tagName}</p>
        </div>
    )
}