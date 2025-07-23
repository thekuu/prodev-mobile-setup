import { View, Text, ScrollView, StyleSheet } from "react-native";
import PropertyListing from "@/components/PropertyListing";
import { SAMPLE_DATA } from "@/constants/data";

const Saved = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Properties</Text>
      <ScrollView style={styles.content}>
        <PropertyListing 
          listings={SAMPLE_DATA.filter(item => item.saved)} 
          showSaveIcon={false}
        />
      </ScrollView>
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
  content: {
    flex: 1,
  },
});

export default Saved;