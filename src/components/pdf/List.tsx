import { View, Text } from "@react-pdf/renderer";

const List = ({
    listItems,
    bulletMarginLeft = 0,
    bulletMarginRight = 0,
}: {
    listItems: string[];
    bulletMarginLeft?: number;
    bulletMarginRight?: number;
}) => {
    return (
        <View style={{ flexDirection: "column" }}>
            {listItems.map((item, idx) => (
                <View
                    key={idx}
                    style={{
                        flexDirection: "row",
                        paddingRight: bulletMarginLeft + bulletMarginRight,
                    }}
                >
                    <Text style={{ marginLeft: bulletMarginLeft, marginRight: bulletMarginRight }}>
                        •
                    </Text>
                    <Text>{item}</Text>
                </View>
            ))}
        </View>
    );
};

export default List;
