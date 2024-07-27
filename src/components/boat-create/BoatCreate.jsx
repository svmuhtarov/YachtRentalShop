export default function BoatCreate(){
    return (
        <section id="create-page" className="auth">
        <form id="create">
            <div className="container">

                <h1>Create Boat</h1>
                <label htmlFor="leg-title">Boat title:</label>
                <input type="text" id="title" name="title" placeholder="Enter boat title..."/>

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" placeholder="Enter boat category..."/>

                <label htmlFor="levels">MaxPasangers:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1"/>

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input className="btn submit" type="submit" value="Create Boat"/>
            </div>
        </form>
    </section>
    );
}