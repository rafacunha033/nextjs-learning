// import { useRouter } from "next/router";
// export async function getServerSideProps(context) {
//     const id = context.query.id;

//     return {
//         props: {
//             id: id
//         }
//     }
// }

export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            }
        },{
            params: {
                id: '2'
            }
        }],
        // When false return 404 for any other page
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    
    const id = context.params.id;
 
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