import { useState, useEffect } from 'react'
import axios from "axios"

function App() {

  const [notes, setNotes] = useState([])
  const [editNote, setEditNote] = useState(null)

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes/")
      .then((res) => {
        setNotes(res.data.notes)
      })
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  // CREATE
  function HandalSumbit(e) {
    e.preventDefault()

    const { title, description } = e.target.elements

    axios.post("http://localhost:3000/api/notes/", {
      title: title.value,
      description: description.value
    })
      .then((res) => {
        console.log(res.data)
        fetchNotes()
        e.target.reset()
      })
  }

  // DELETE
  function handelDeleteNote(noteID) {

    axios.delete("http://localhost:3000/api/notes/" + noteID)
      .then((res) => {
        console.log(res.data)
        fetchNotes()
      })
  }

  // CLICK UPDATE BUTTON
  function handelUpdateNote(note) {
    setEditNote(note)
  }

  // PATCH
  function handelUpdateSubmit(e) {

    e.preventDefault()

    const { title, description } = e.target.elements

    axios.patch(
      "http://localhost:3000/api/notes/" + editNote._id,
      {
        title: title.value,
        description: description.value
      }
    )
      .then((res) => {
        console.log(res.data)
        setEditNote(null)
        fetchNotes()
      })
  }

  return (
    <>
      {/* CREATE FORM */}

      <form
        className='note-create-form'
        onSubmit={HandalSumbit}
      >
        <input
          name='title'
          type="text"
          placeholder='Enter title'
        />

        <input
          name="description"
          type="text"
          placeholder='Enter description'
        />

        <button>Create note</button>
      </form>


      {/* UPDATE FORM */}

      {editNote && (
        <form onSubmit={handelUpdateSubmit}>

          <input
            name="title"
            type="text"
            defaultValue={editNote.title}
          />

          <input
            name="description"
            type="text"
            defaultValue={editNote.description}
          />

          <button>Update Note</button>

          <button
            type="button"
            onClick={() => setEditNote(null)}
          >
            Cancel
          </button>

        </form>
      )}


      {/* NOTES */}

      <div className="notes">

        {
          notes.map(note => {

            return (
              <div className="note" key={note._id}>

                <h2>{note.title}</h2>

                <p>{note.description}</p>

                <button
                  onClick={() => {
                    handelDeleteNote(note._id)
                  }}
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    handelUpdateNote(note)
                  }}
                >
                  Update
                </button>

              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default App