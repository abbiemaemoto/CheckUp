import React, { createContext, useContext, useReducer } from 'react';

// Initial state for appointments
const initialState = {
  appointments: [
    { id: 1, date: 'Nov 3, 2023', time: '1:00-1:30 pm', doctor: 'Dr. James', description: 'CheckUp scheduled this appointment so that you could receive your annual check-up from your primary doctor.' },
  ],
};

// Create a context
const AppointmentsContext = createContext();

// Create a reducer function
const appointmentsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return { ...state, appointments: [...state.appointments, action.payload] };
    case 'EDIT_APPOINTMENT':
      // Find the appointment to edit
      const editedAppointments = state.appointments.map(appointment => {
        if (appointment.id === action.payload.id) {
          // Update the fields of the appointment
          return { ...appointment, ...action.payload.updatedFields };
        }
        return appointment;
      });
      return { ...state, appointments: editedAppointments };
    case 'REMOVE_APPOINTMENT':
      // Filter out the appointment to remove
      const filteredAppointments = state.appointments.filter(appointment => appointment.id !== action.payload.id);
      return { ...state, appointments: filteredAppointments };
    default:
      return state;
  }
};


// Create a context provider component
export const AppointmentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appointmentsReducer, initialState);
  const [firstName, setFirstName] = React.useState("");
  const contextValue = React.useMemo(() => ({ state, dispatch, firstName, setFirstName }), [state, dispatch, firstName, setFirstName]);


  return (
    <AppointmentsContext.Provider value={contextValue}>
      {children}
    </AppointmentsContext.Provider>
  );
};

// Custom hook to use the context
export const useAppointments = () => {
  const context = useContext(AppointmentsContext);
  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentsProvider');
  }
  return context;
};

export const createIdGenerator = (initialId = 1) => {
  let id = initialId;
  return () => {
    id += 1;
    return id;
  };
};

