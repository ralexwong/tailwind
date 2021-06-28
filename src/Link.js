export default function Link(props) {
    return <a href={`#`} className={`base-link ${props.className}`}>{props.href}</a>
}