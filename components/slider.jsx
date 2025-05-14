import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width  ;

const dataSlider1 = [
  {
    id: "1",
    title: "Expert Care for a Healthier Heart",
    image: require("@/assets/images/cardio icon 3.jpg"),
    label: "Cardiologist",
  },
  {
    id: "2",
    title: "Guiding You Through Pregnancy, Fertility, and Beyond",
    image: require("@/assets/images/gynaecologist.png"),
    label: "Gynaecologist",
  },
  {
    id: "3",
    title: "Advanced Dental Care for Every Smile",
    image: require("@/assets/images/Dentist.png"),
    label: "Dentist",
  },
  {
    id: "4",
    title: "Comprehensive Gastrointestinal Treatment",
    image: require("@/assets/images/Gastrologist (1).png"),
    label: "Gastroenterologist",
  },
  {
    id: "5",
    title: "Expert Orthopedic Solutions for Mobility",
    image: require("@/assets/images/Orthopedist.png"),
    label: "Orthopedist",
  },
  {
    id: "6",
    title: "State-of-the-Art Diagnostic Services",
    image: require("@/assets/images/Diagnostics.png"),
    label: "Diagnostics",
  },
  {
    id: "7",
    title: "State-of-the-Your Skin Deserves the Best Diagnostic Services",
    image: require("@/assets/images/Dermatologist.png"),
    label: "Dermatologist",
  },
  {
    id: "8",
    title: "State-of-the-From Prevention to Treatment, We’ve Got You Covered Diagnostic Services",
    image: require("@/assets/images/general physicians.png"),
    label: "General Physician",
  },
  {
    id: "9",
    title: "State-of-Understanding Your Nervous System, Improving Your Life-Art Diagnostic Services",
    image: require("@/assets/images/Neurologist.png"),
    label: "Neurologist",
  },
  {
    id: "10",
    title: "State-of-the-Empowering You to Live Without Limits Diagnostic Services",
    image: require("@/assets/images/physiotherapisticon.png"),
    label: "Physiotherapist ",
  },
  {
    id: "11",
    title: "State-of-the-Art DExpert Care for Your Child’s Physical and Emotional Healthiagnostic Services",
    image: require("@/assets/images/Pediatrician.png"),
    label: "Pediatrician ",
  },
  {
    id: "12",
    title: "State-of-the-Art Specialized Care for Healthy Lungs and Airways Services",
    image: require("@/assets/images/pulmonologist.png"),
    label: "Pulmonologist",
  },
];

const doctorCategories = [
  { id: "1", label: "Cardiologist", icon: require("@/assets/images/cardio icon 3.jpg") },
  { id: "2", label: "Gynaecologist", icon: require("@/assets/images/gynecologist icon.jpeg.jpg") },
  { id: "3", label: "Dentist", icon: require("@/assets/images/dentish icon 2.jpeg.jpg") },
   { id: "4", label: "Gastroenterologist", icon: require("@/assets/images/Gastroenterologist icon 1.png") },
   { id: "5", label: "Orthopedist", icon: require("@/assets/images/orthopedic icon 3.webp") },
   { id: "6", label: "Diagnostics", icon: require("@/assets/images/DiagnosticsIcon.png") },
   { id: "7", label: "Dermatologist ", icon: require("@/assets/images/dermatologist icon 3.png") },
   { id: "8", label: "General Physician", icon: require("@/assets/images/general physician icon 2.png") },
   { id: "9", label: "Neurologist", icon: require("@/assets/images/neurologist icon 02.png") },
   { id: "10", label: "Physiotherapist", icon: require("@/assets/images/physiotherapisticon.png") },
   { id: "11", label: "Pediatrician", icon: require("@/assets/images/Paediatrician.jpg") },
  { id: "12", label: "Pulmonologist", icon: require("@/assets/images/Pulmonologist icon.png") },
   ];

const FeedbackSlider = ({ feedbackList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [feedbackList.length]);

  return (
    <View style={styles.testimonialContainer}>
      <Text style={styles.testimonialText}>{feedbackList[currentIndex]}</Text>
    </View>
  );
};

const slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Doctors Opinion");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataSlider1.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }
  }, [currentIndex]);

  const renderSliderItems = ({ item }) => (
    <View style={styles.sliderItem}>
      <Image source={item.image} style={styles.sliderImage} />
      <Text style={styles.sliderTitle}>{item.title}</Text>
    </View>
  );

  const doctorFeedback = [
    "I appreciate how easy this platform is to use. It keeps all patient data secure and accessible, making my consultations more organized and effective. — Dr. Rekha Patil",
    "This platform has revolutionized the way I interact with my patients. It ensures efficient scheduling and seamless virtual consultations. — Dr. Amit Sharma",
    "An incredible tool for modern healthcare! It has streamlined patient interactions and improved overall efficiency. — Dr. Neha Verma",
  ];

  const patientFeedback = [
    "This platform made it so easy to book appointments. I received quality consultation from the comfort of my home! — Rahul Mehta",
    "A seamless experience! Booking, consulting, and follow-ups have never been easier. Highly recommend this service. — Priya Kapoor",
    "The online consultation feature saved me so much time. It’s reliable and efficient, and I trust the doctors here. — Sneha Roy",
  ];

  return (
    <ScrollView style={styles.container}>
      <FlatList
        ref={sliderRef}
        data={dataSlider1}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={renderSliderItems}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        getItemLayout={(data, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
      />

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Find a Doctor</Text>
        <FlatList
          data={doctorCategories}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Image source={item.icon} style={styles.categoryIcon} />
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Doctors Opinion" && styles.activeTab]}
          onPress={() => setActiveTab("Doctors Opinion")}
        >
          <Text style={styles.tabText}>Doctors Opinion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Patients Opinion" && styles.activeTab]}
          onPress={() => setActiveTab("Patients Opinion")}
        >
          <Text style={styles.tabText}>Patients Opinion</Text>
        </TouchableOpacity>
      </View>

      <FeedbackSlider feedbackList={activeTab === "Doctors Opinion" ? doctorFeedback : patientFeedback} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  sliderItem: { width: ITEM_WIDTH, alignItems: "center",padding: 30 },
  sliderImage: { width: ITEM_WIDTH - 20, height: 150, borderRadius: 10,marginBottom: 10 },
  categoryContainer: { paddingHorizontal: 10, marginBottom: 20 },
  categoryTitle: { fontSize: 16, fontWeight: "bold", marginBottom: -10,paddingBottom: 10,marginLeft: 10 },
  categoryIcon: {
    width: 130,  // Adjust size as needed
    height: 100, // Adjust size as needed
    padding: 10,
    borderRadius: 50,
    resizeMode: "contain",
  },
  tabContainer: { flexDirection: "row", justifyContent: "center", marginVertical: 30 },
  activeTab: { borderBottomColor: "#000" },
  tabText: { fontSize: 14 },
  testimonialContainer: { padding: 30, alignItems: "center" },
  testimonialText: { textAlign: "center", fontSize: 14, fontStyle: "italic" },
});



export default slider;
