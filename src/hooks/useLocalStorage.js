const useLocalStorage = (key) => {
  const save = (data) => {
    localStorage.setItem(key, JSON.stringify(data))
  }

  const load = () => {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : null
  }

  return { save, load }
}

export default useLocalStorage