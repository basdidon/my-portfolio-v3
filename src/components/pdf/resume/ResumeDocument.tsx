"use client";
import { Document, Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import profile from "@/assets/profile.jpg";
import List from "../List";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        gap: 4,
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    header: {
        backgroundColor: "#0096FF",
        //height: 120,
        gap: 4,
        padding: 8,
        marginVertical: 8,
        color: "white",
    },
    DisplayText: {
        fontSize: 32,
        fontWeight: "bold",
    },
    SubDisplayText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    nameContainer: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: "auto",
        backgroundColor: "red",
        width: "50%",
        letterSpacing: 2,
    },
    profile: {
        height: 164,
        width: 164,
        position: "absolute",
        borderRadius: 120,
        left: 48,
        top: 24,
    },
    bodyContainer: {
        flexDirection: "row",
        gap: 4,
        fontSize: 10,
    },
    leftContainer: {
        flex: 2,
        gap: 2,
        //backgroundColor: "#ca5941",
        paddingHorizontal: 2,
    },
    rightContainer: {
        flex: 1,
        paddingHorizontal: 2,
        //backgroundColor: "cyan",
        fontSize: 8,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: "bold",
    },
    sectionContainer: {
        padding: 4,
        gap: 2,
    },
    textLabel: {
        fontWeight: "semibold",
    },
    text: {
        fontSize: 10,
        paddingRight: 12,
        wordBreak: "normal", // This ensures breaks only at spaces
    },
    textIndent: {
        textIndent: "50%",
    },
});

export const ResumeDocument = ({ title }: { title?: string }) => {
    return (
        <Document title={title || "Untitled"}>
            <Page size="A4">
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.DisplayText}>Pongsatorn Sorun</Text>
                        <Text style={styles.SubDisplayText}>Web Developer</Text>
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.sectionTitle}>Personal projects</Text>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.textLabel}>Simple banking API</Text>
                                <List
                                    bulletMarginRight={8}
                                    listItems={[
                                        "Developed a modular Banking API using FastEndpoints and the REPR (Request–Endpoint–Response) pattern, promoting clarity and separation of concerns.",
                                        "Implemented role-based access control with three distinct roles: Customer, Teller, and Admin, each with specific permissions.",
                                        "Designed use cases such as account creation, deposits, withdrawals, fund transfers, account freezing, and OTP-based verification.",
                                        "Powered backend with MartenDb using Event Sourcing for immutable transaction history and complete auditability.",
                                        "Created a robust and extensible system supporting operations like search by ID, transaction history viewing, and account status changes.",
                                        "Used: C#, ASP.NET, ASP.NET Core Identity, EF Core, MartenDb, FastEndpoints, Docker",
                                    ]}
                                />
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.textLabel}>Price scanner</Text>
                                <List
                                    bulletMarginRight={8}
                                    listItems={[
                                        "Developed PriceScanner, a cross-platform mobile app using React Native with Expo, enabling users to scan product barcodes for instant price lookup.",
                                        "Built the backend with ASP.NET Web API, exposing endpoints to retrieve product details and handle cart operations.",
                                        "Implemented real-time barcode scanning, allowing users to add items to a virtual cart and pre-calculate total prices before checkout.",
                                        "Integrated camera access and barcode recognition for seamless in-store product scanning.",
                                        "Designed responsive and user-friendly mobile UI for intuitive interaction and fast price feedback.",
                                        "Established a modular frontend–backend architecture for future features like order submission and user authentication (in progress).",
                                        "Focused on API communication, state management, and cart calculation logic to support practical shopping scenarios.",
                                    ]}
                                />
                            </View>
                        </View>
                        {/* Right container */}
                        <View style={styles.rightContainer}>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>My Contact</Text>
                                <Text>
                                    <Text style={styles.textLabel}>Email: </Text>
                                    pt_s@kkumail.com
                                </Text>
                                <Text>
                                    <Text style={styles.textLabel}>Tel: </Text>(+66)8-5244-4506
                                </Text>
                                <Text>
                                    <Text style={styles.textLabel}>Address: </Text>
                                    555/243 sewalee village, Ban Tum sub-district, Muang district,
                                    Khonkean, 40000
                                </Text>
                                <Text>
                                    <Text style={styles.textLabel}>Github: </Text>
                                    github.com/basdidon
                                </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Skills</Text>
                                <Text>
                                    <Text style={styles.textLabel}>Languages: </Text>
                                    C#, Javascript, Typescript
                                </Text>
                                <Text>
                                    <Text style={styles.textLabel}>Frameworks & Libraries: </Text>
                                    .NET, ASP.NET Core, FastEndpoints, EF Core, MartenDB, Ocelot,
                                    MassTransit, React.js, Next.js
                                </Text>
                                <Text>
                                    <Text style={styles.textLabel}>Tools & Technologies: </Text>
                                    Unity, REST APIs, Git, PostgreSQL, RabbitMQ
                                </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Interested</Text>
                                <List
                                    listItems={[
                                        "Game Development",
                                        "Microservices",
                                        "Event Sourcing",
                                        "PEPR",
                                        "Bitcoin",
                                    ]}
                                    bulletMarginRight={4}
                                />
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Education Background</Text>
                                <Text>Khon Kean University</Text>
                                <Text>Bechelor of Science , Major in Computer Science</Text>
                                <Text>2016 - 2020</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};
