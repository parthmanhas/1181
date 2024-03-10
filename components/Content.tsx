export default function Content({ width, component }: { width: number, component: (() => JSX.Element) | undefined }) {
    return (
        <div className={`overflow-y-auto h-[100vh] ${width ? `w-[${width}%]` : ''}`}>
            {component && component()}
        </div>
    )
}