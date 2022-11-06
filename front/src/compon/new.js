import "../css/new.css";

function New() {
  return (
    <div className="New">
      <div class="container-input">
        <input
          type="file"
          name="file-5"
          id="file-5"
          class="inputfile inputfile-5"
          data-multiple-caption="{count} archivos seleccionados"
          multiple
        />
        <label for="file-5">
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="iborrainputfile"
              width="20"
              height="17"
              viewBox="0 0 20 17"
            >
              <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
            </svg>
          </figure>
          <span class="iborrainputfile">Seleccionar archivo</span>
        </label>
        
      </div>
      <section>
          <h1 class="des">Descripción</h1>
          <div class="con-des">
            <textarea type="text" class="int-des"></textarea>
          </div>
        </section>
    </div>
  );
}

export default New;
