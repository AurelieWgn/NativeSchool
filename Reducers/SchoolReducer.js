// const SchoolReducer = (state, action) => {
//   let student;
//   switch (action.type) {
//     case "INCREMENTE_ATTENDANCE":
//       student = state.students.find((s) => s.id === action.id);
//       student.absence++;

//       // TODO essayer de coller au pattern du Flux ...
//       return { ...state };

//     case "DECREMENT_ATTENDANCE":
//       student = state.students.find((s) => s.id === action.id);

//       if (student.absence > 0) student.absence--;

//       return { ...state };

//     default:
//       throw new Error("Bad Action Type");
//   }
// };

// export default SchoolReducer;
