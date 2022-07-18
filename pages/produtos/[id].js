// import { useRouter } from "next/router";
export async function getServerSideProps(context) {
    const id = context.query.id;

    return {
        props: {
            id: id
        }
    }
}

function Produtos(props) {
    // const router = useRouter();
    // const id = router.query.id;

    return (
        <h1>Id do produto: {props.id}</h1>
    )
}

export default Produtos;