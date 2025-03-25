const Table = ({ data }) => {



    return (
        data.map(item => <span>{item}</span>)
    )



}

export default Table