import React from "react";
// import SchoolReducer from "../Reducers/SchoolReducer";

const SchoolContext = React.createContext();

const initialState = {
  students: [
    { id: 1, name: "Alice", lessons: [1, 2], absence: 0, notes: [13, 9, 20] },
    { id: 2, name: "Alan", lessons: [3], absence: 0, notes: [13, 7, 20] },
    { id: 3, name: "Phil", lessons: [1, 2, 3], absence: 0, notes: [1, 9, 20] },
    { id: 4, name: "Naoudi", lessons: [1], absence: 0, notes: [13, 19, 20] },
    { id: 5, name: "Fenley", lessons: [3], absence: 0, notes: [13, 9, 0] },
  ],

  lessons: [
    { id: 1, title: "React" },
    { id: 2, title: "React Native" },
    { id: 3, title: "MongoDB" },
  ],
  behaviurs: [],
  levels: [],
  oders: false,
};

const SchoolReducer = (state, action) => {
  let student;
  switch (action.type) {
    case "INCREMENTE_ATTENDANCE":
      student = state.students.find((s) => s.id === action.id);
      student.absence++;

      // TODO essayer de coller au pattern du Flux ...
      return { ...state };

    case "DECREMENT_ATTENDANCE":
      student = state.students.find((s) => s.id === action.id);

      if (student.absence > 0) student.absence--;

      return { ...state };

    default:
      throw new Error("Bad Action Type");
  }
};

const SchoolProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    SchoolReducer,
    JSON.parse(JSON.stringify(initialState))
  );

  return (
    <SchoolContext.Provider value={[state, dispatch]}>
      {children}
    </SchoolContext.Provider>
  );
};

const average = (notes) => {
  if (notes.length > 0) {
    return (
      Math.floor(
        (10 * notes.reduce((acc, curr) => acc + curr, 0)) / notes.length
      ) / 10
    );
  }

  return null;
};

export { SchoolProvider, SchoolContext, average };
