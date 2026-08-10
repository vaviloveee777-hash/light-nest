
const NotesHero = (props) => {
  const {
    onOpenForm,
  } = props

  return (

<div className="notes-page__hero">
  <h1 className="notes-page__title">My Notes</h1>
  <p className="notes-page__subtitle">Write everything that matters.</p>
  <button className="notes-page__new-button"
   onClick={onOpenForm}
  >
    + New Note
  </button>
</div>
  )
}

export default NotesHero