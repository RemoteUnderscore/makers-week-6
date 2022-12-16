const cohort = {
  name: 'November 2022',
  id: 1234,
  students: ['Mike', 'Aziz', 'Josh', 'Nicola', 'Andy', 'Eliza']
  };


  const message = (cohort) => {
    return(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`)
  }
