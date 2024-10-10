import "./Avatar.css";
const Avatar = (props) => {
    const [] = props.nome.split(" ");

    return <div className="avatar_root">{props.nome}</div>
};

export default Avatar;