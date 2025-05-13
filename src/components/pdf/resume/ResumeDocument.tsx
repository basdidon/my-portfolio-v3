"use client";
import { Document, Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import profile from "@/assets/profile.jpg";
import List from "./List";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 4,
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 24,
        fontSize: 10,
    },
    header: {
        backgroundColor: "#a2bffe",
        //height: 120,
        padding: 8,
        paddingVertical: 24,
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
    DisplayContainer: {
        marginVertical: 12,
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

    leftContainer: {
        flex: 2,
        gap: 2,
        backgroundColor: "#ca5941",
        paddingHorizontal: 2,
    },
    rightContainer: {
        flex: 1,
        paddingHorizontal: 2,
        backgroundColor: "cyan",
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: "bold",
    },
    sectionContainer: {
        padding: 4,
    },
    textLabel: {
        fontSize: 10,
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
                    <View style={styles.leftContainer}>
                        <View style={styles.DisplayContainer}>
                            <Text style={styles.DisplayText}>Pongsatorn Sorun</Text>
                            <Text style={styles.SubDisplayText}>Programmer</Text>
                        </View>
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
                            <Text style={styles.textLabel}>
                                FlowGraph (unity custom graphview tool)
                            </Text>
                            <List
                                bulletMarginRight={8}
                                listItems={[
                                    "Developed a custom Dialogue Flowgraph System in Unity using GraphView API to design, store, and visualize branching dialogue.",
                                    "Enabled node-based editing for creating dynamic dialogue trees with choices, conditions, and events.",
                                    "Implemented custom node creation via script, allowing developers to define new node types with specific behaviors and fields.",
                                    "Built save/load functionality for dialogue data using ScriptableObjects and custom serialization.",
                                    "Supported features such as branching paths, variable checks, and event triggers within the graph.",
                                    "Used: C#, Unity, Ui Toolkit, Graphview, ScriptableObjects",
                                ]}
                            />
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.sectionTitle}>My Contact</Text>
                        <Text>pt_s@kkumail.com</Text>
                        <Text>(+66)8-5244-4506</Text>
                        <Text>
                            555/243 sewalee village, Ban Tum sub-district, Muang district, Khonkean,
                            40000
                        </Text>
                        <Text>github.com/basdidon</Text>
                        <Text style={styles.sectionTitle}>Skills</Text>
                        <View style={styles.sectionContainer}>
                            <Text>
                                <Text style={styles.textLabel}>Languages: </Text>
                                C#, Javascript, Typescript
                            </Text>
                            <Text>
                                <Text style={styles.textLabel}>Frameworks & Libraries: </Text>.NET,
                                ASP.NET Core, FastEndpoints, EF Core, MartenDB, Ocelot, MassTransit,
                                React.js, Next.js
                            </Text>
                            <Text>
                                <Text style={styles.textLabel}>Tools & Technologies: </Text>
                                Unity, REST APIs, Git, PostgreSQL, RabbitMQ
                            </Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};
