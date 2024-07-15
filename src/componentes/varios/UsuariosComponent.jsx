import { useFetch } from "../../hooks/useFetch";

function UsuariosComponent() {
    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')
    return (
        <>
            <h1>Lista de usuarios</h1>
            {
                isLoading
                    ?
                    <h4>Cargando...</h4>
                    :
                    errors
                        ?
                        <p>Hubo un error: {errors}</p>
                        :
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(usuario => {
                                    return (
                                        <tr key={usuario.id}>
                                            <th scope="row">{usuario.id}</th>
                                            <td>{usuario.name}</td>
                                            <td>{usuario.email}</td>
                                            <td>{usuario.website}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>}
        </>);
}

export default UsuariosComponent;