export default function Content({ component }: { component: (() => JSX.Element) | undefined }) {
    return (
        <div className="overflow-y-auto h-[100vh]">
            {component && component()}
        </div>
    )
}