import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MESSAGES = [
  { id: "1", from: "Property Owner", subject: "About your inquiry", preview: "Hi there, thanks for your interest in..." },
  { id: "2", from: "Support Team", subject: "Your account", preview: "We've updated your account settings..." },
  { id: "3", from: "Neighborhood Alert", subject: "New properties", preview: "5 new properties match your criteria..." },
];

const Inbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <FlatList
        data={MESSAGES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageItem}>
            <View style={styles.messageIcon}>
              <Ionicons name="mail-outline" size={24} color="#34967C" />
            </View>
            <View style={styles.messageContent}>
              <Text style={styles.messageFrom}>{item.from}</Text>
              <Text style={styles.messageSubject}>{item.subject}</Text>
              <Text style={styles.messagePreview}>{item.preview}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#34967C",
  },
  messageItem: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  messageIcon: {
    marginRight: 15,
  },
  messageContent: {
    flex: 1,
  },
  messageFrom: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },
  messageSubject: {
    fontSize: 14,
    color: "#333",
    marginBottom: 3,
  },
  messagePreview: {
    fontSize: 12,
    color: "#999",
  },
});

export default Inbox;