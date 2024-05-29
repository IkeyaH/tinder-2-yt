import { View, Text } from 'react-native'
import React from 'react'

const AuthContext = React.createContext({
  user: ''
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <View>
      <AuthContext.Provider 
      value={{
        user: "Sonny"
      }}>
        {children}
      </AuthContext.Provider>
    </View>
  )
}

export default function useAuth() {
  return React.useContext(AuthContext);
}