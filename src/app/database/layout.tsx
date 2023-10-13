export default function DatabaseLayout(props: {children: React.ReactNode, team: React.ReactNode}) {
    return (
        <section>
            {props.children}
            {props.team}
        </section>
    );
}