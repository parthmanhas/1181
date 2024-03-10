export default function Content({ width, component }: { width: number, component: (() => JSX.Element) | undefined }) {
    return (
        <div className={width ? `w-[${width}%]` : ''}>
            {component && component()}
        </div>
    )
}