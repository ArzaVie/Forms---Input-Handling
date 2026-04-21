import { View, TextInput, Text, StyleSheet } from 'react-native';

export function FormInput({ label, error, touched, ...props }) {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          touched && error && styles.inputError
        ]}
        placeholderTextColor="#888"
        {...props}
      />
      {touched && error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 16 },
  label: { fontSize: 14, color: '#ccc', marginBottom: 6 },
  input: { 
    borderWidth: 1, 
    borderColor: '#444', 
    borderRadius: 8, 
    padding: 12, 
    color: '#fff' 
  },
  inputError: { borderColor: '#FF6B6B' },
  errorText: { color: '#FF6B6B', fontSize: 12, marginTop: 4 },
});