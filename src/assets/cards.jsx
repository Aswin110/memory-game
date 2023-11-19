function Cards ({addCurrentScore}) {
    return (
        <>
            <div className="cards">
                <div className="card" onClick={addCurrentScore}></div>
                <div className="card" onClick={addCurrentScore}></div>
                <div className="card" onClick={addCurrentScore}></div>
                <div className="card" onClick={addCurrentScore}></div>
                <div className="card" onClick={addCurrentScore}></div>
                <div className="card" onClick={addCurrentScore}></div>
                <div className="card" onClick={addCurrentScore}></div>
                <div className="card" onClick={addCurrentScore}></div>
                <div className="card" onClick={addCurrentScore}></div>
                <div className="card" onClick={addCurrentScore}></div>
                <div className="card" onClick={addCurrentScore}></div>
                <div className="card" onClick={addCurrentScore}></div>
            </div>
        </>
    )
}

export default Cards;