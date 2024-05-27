"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-csharp";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import CreateNodeMenuPNG from "./(img)/create_node_menu.png";
import NodeWithNoPort from "./(img)/node_with_no_port.png";
import NodeInputOutputPNG from "./(img)/node_io.png";
import NodeWithPortsPNG from "./(img)/node_with_ports.png";
import CommpletedNodeNoStyle from "./(img)/completed_node_no_style.png";
import CommpletedNodeWithStyle from "./(img)/completed_node_with_style.png";

import CSharpCodeBlock from "@/components/CSharpCodeBlock";

const FlowGraphPage = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <div className="px-2 xl:px-5 xl:py-3 flex flex-col items-center text-white md:w-4/5 mx-auto gap-y-3 text-sm lg:text-base">
                <div className="text-4xl font-bold py-2 mb-3 border-b-2 w-full">
                    <h1>Flow Graph</h1>
                </div>
                <iframe
                    className="w-96 h-64 sm:w-[560px] sm:h-[315px]"
                    src="https://www.youtube.com/embed/0DVR4JZOncA?si=1RB9-2KmMiX9f6Zm"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <div className="my-3">
                    <p>
                        Github URL :{" "}
                        <Link
                            className="text-blue-500 underline"
                            href={"https://github.com/basdidon/H8-FlowGraph"}
                            target="_blank"
                        >
                            github.com/basdidon/H8-FlowGraph
                        </Link>
                    </p>
                </div>
                <div className="w-full">
                    <p>
                        &emsp;&emsp;a tool for store dialogues into Unity&apos;s ScriptableObject,
                        and visualize it on Unity&apos;s GraphView, make them easier to read and
                        edit, allow user to create custom Node and Port by script
                    </p>
                </div>
                <div className="w-full space-y-2 mt-2">
                    <h3 className="text-lg md:text-2xl">Installation</h3>
                    <ul className="list-disc list-inside">
                        <li>
                            In UnityEditor, open{" "}
                            <span className="font-bold">
                                {" "}
                                PackageManager Window &gt; Package Manager
                            </span>{" "}
                        </li>
                        <li>
                            Click a plus sign button on the most top-left, then select{" "}
                            <span className="font-bold">add package from git URL</span>
                        </li>
                        <li>enter TextField with this git URL, then press add button</li>
                    </ul>
                </div>
                <div className="w-full space-y-2 mt-2">
                    <h3 className="text-lg md:text-2xl">Create Custom Node</h3>
                    <p>
                        &emsp;&emsp;First create class that Extends BaseNode and Defined{" "}
                        <code>
                            [<span className="text-lime-300">CreateCustomNode</span>()]
                        </code>
                    </p>
                    <CSharpCodeBlock codeString={code_1} />
                    <p>
                        &emsp;&emsp;Now you can create node by open graphTree and right-click on
                        empty space, then select{" "}
                        <span className="font-bold">Player &gt; GainMoney</span>
                    </p>
                    <Image src={CreateNodeMenuPNG} alt={""} className="mx-auto" />
                    <p>
                        &emsp;&emsp;And a node will look like the image below because we have not
                        defined the port yet.
                    </p>
                    <Image src={NodeWithNoPort} alt={""} className="mx-auto" />
                    <p>
                        &emsp;&emsp;Next, let create port Input port with type{" "}
                        <span className="text-yellow-500">ExecutionFlow </span>
                        by declare Getter name it as &quot;Input&quot; and define Attrbute{" "}
                        <code>
                            &#91;<span className="text-lime-300">Input</span>&#93;
                        </code>{" "}
                        to tell FlowGraph this is a input port.
                    </p>
                    <p>
                        &emsp;&emsp;Declare another port with same type but name it as
                        &quot;Output&quot; and define Attrbute{" "}
                        <code>
                            &#91;<span className="text-lime-300">Output</span>&#93;
                        </code>{" "}
                        to tell FlowGraph this is a output port.
                    </p>
                    <CSharpCodeBlock codeString={code_2} />
                    <p>
                        &emsp;&emsp;Now if you go back to GraphTree, Graph will re-render and node
                        will be added by ports, like below.
                    </p>
                    <Image src={NodeInputOutputPNG} alt={""} className="mx-auto" />
                    <p>
                        &emsp;&emsp;You can plug it into another port with same type, but not on the
                        same node, and not on the same direction.
                    </p>
                    <p>
                        &emsp;&emsp;Next step, Create port with type int name it as MoneyToGain like
                        following code.
                    </p>
                    <CSharpCodeBlock codeString={code_3} />
                    <Image src={NodeWithPortsPNG} alt={""} className="mx-auto" />
                    <p>
                        &emsp;&emsp;Node that have a{" "}
                        <span className="text-yellow-500">ExecutionFlow </span> port, won&apos;t be
                        performed until Node implements{" "}
                        <span className="text-yellow-500">IExecutableNode </span>
                    </p>
                    <ul className="list-disc list-inside ms-24">
                        <li>OnEnter() : Method called when a controller entering the node.</li>
                        <li>OnExit() : Method called when a controller exiting the node.</li>
                        <li>Action() : Method for executing an action on the node.</li>
                    </ul>
                    <p>
                        &emsp;&emsp;So we need to implements{" "}
                        <span className="text-yellow-500">IExecutableNode </span>. And when
                        OnEnter() we increase Player&apos;s Money and Move To Next Node.
                    </p>
                    <CSharpCodeBlock codeString={code_4} />
                    <p>
                        &emsp;&emsp;We can&apos;t read a value from MoneyToGain because we never set
                        a value to it. Let&apos;s imagine that when we read data from this port, we
                        need to find the port that connects to it. Then we read data from that port
                        and return it. Otherwise, if it doesn&apos;t connect to any other port, it
                        should return the default value. But don&apos;t worry, we have the method
                        <code className="px-3">
                            <span className="text-lime-300">GetInputValue</span>
                            (portName,defaultValue)
                        </code>
                        to do that for us. So we just apply this method to our code.
                    </p>
                    <CSharpCodeBlock codeString={code_5} />
                    <p>
                        &emsp;&emsp;we can create backingField by declaring a field with the same
                        type of port. And add name of that field to{" "}
                        <code>
                            &#91;<span className="text-lime-300">Input</span>&#93;
                        </code>{" "}
                        or{" "}
                        <code>
                            &#91;<span className="text-lime-300">Output</span>&#93;
                        </code>{" "}
                        , After that we need to set backingField&apos;s value to default port value
                        by replace default value in
                        <code className="px-3">
                            <span className="text-lime-300">GetInputValue</span>
                            (portName,defaultValue)
                        </code>
                    </p>
                    <CSharpCodeBlock codeString={code_6} />
                    <Image src={CommpletedNodeNoStyle} alt="" className="mx-auto" />
                    <p>
                        &emsp;&emsp;Finally, You can changed background color and text color of the
                        header. by create new class extend <code>NodeView</code> and define{" "}
                        <code>
                            &#91;<span className="text-lime-300">CustomNodeView</span>&#93;
                        </code>{" "}
                        and override both color like following code.
                    </p>
                    <CSharpCodeBlock codeString={code_style} />
                    <Image src={CommpletedNodeWithStyle} alt="" className="mx-auto" />
                </div>
            </div>
        </>
    );
};

export default FlowGraphPage;

const code_1 = `using UnityEngine;
using H8.FlowGraph;
using H8.FlowGraph.NodeTemplate;

[CreateNodeMenu("Player/GainMoney")]
public class PlayerGainMoneyNode : BaseNode
{
}`;
const code_2 = `using UnityEngine;
using H8.FlowGraph;
using H8.FlowGraph.NodeTemplate;

[CreateNodeMenu("Player/GainMoney")]
public class PlayerGainMoneyNode : BaseNode
{
    [Input]
    public ExecutionFlow Input { get; }

    [Output]
    public ExecutionFlow Output { get; }
}`;
const code_3 = `using UnityEngine;
using H8.FlowGraph;
using H8.FlowGraph.NodeTemplate;

[CreateNodeMenu("Player/GainMoney")]
public class PlayerGainMoneyNode : BaseNode
{
    [Input]
    public ExecutionFlow Input { get; }

    [Output]
    public ExecutionFlow Output { get; }

    [Input]
    public int MoneyToGain { get; }
}`;

const code_4 = `using UnityEngine;
using H8.FlowGraph;
using H8.FlowGraph.NodeTemplate;

[CreateNodeMenu("Player/GainMoney")]
public class PlayerGainMoneyNode : BaseNode, IExecutableNode
{
    [Input]
    public ExecutionFlow Input { get; }

    [Output]
    public ExecutionFlow Output { get; }

    [Input]
    public int MoneyToGain {get;}

    public void Action(GraphTreeController controller, IBaseAction action) { }

    public void OnEnter(GraphTreeController controller)
    {
        // Call Method that increase money for Player
        DialogueDatabase.Instance.Player.GainMoney(MoneyToGain);
        // Move to Next Node
        controller.ToNextExecutableNode(GetPortData(nameof(Output)), GraphTree);
    }

    public void OnExit(GraphTreeController controller) { }
}`;
const code_5 = `using UnityEngine;
using H8.FlowGraph;
using H8.FlowGraph.NodeTemplate;

[CreateNodeMenu("Player/GainMoney")]
public class PlayerGainMoneyNode : BaseNode, IExecutableNode
{
    [Input]
    public ExecutionFlow Input { get; }

    [Output]
    public ExecutionFlow Output { get; }

    [Input]
    public int MoneyToGain => GetInputValue(nameof(MoneyToGain), 0);

    public void Action(GraphTreeController controller, IBaseAction action) { }

    public void OnEnter(GraphTreeController controller)
    {
        DialogueDatabase.Instance.Player.GainMoney(MoneyToGain);
        controller.ToNextExecutableNode(GetPortData(nameof(Output)), GraphTree);
    }

    public void OnExit(GraphTreeController controller) { }
}`;
const code_6 = `using UnityEngine;
using H8.FlowGraph;
using H8.FlowGraph.NodeTemplate;

[CreateNodeMenu("Player/GainMoney")]
public class PlayerGainMoneyNode : BaseNode, IExecutableNode
{
    [Input]
    public ExecutionFlow Input { get; }

    [Output]
    public ExecutionFlow Output { get; }

    public int moneyToGain; // add backingField
    [Input(nameof(moneyToGain))] // add backingField&apos;s name to InputAttribute
    public int MoneyToGain => GetInputValue(nameof(MoneyToGain), moneyToGain);  // set backingField as default value

    public void Action(GraphTreeController controller, IBaseAction action) { }

    public void OnEnter(GraphTreeController controller)
    {
        DialogueDatabase.Instance.Player.GainMoney(MoneyToGain);
        controller.ToNextExecutableNode(GetPortData(nameof(Output)), GraphTree);
    }

    public void OnExit(GraphTreeController controller) { }
}`;

const code_style = `[CustomNodeView(typeof(PlayerGainMoneyNode))]
public class PlayerGainMoneyNodeView : NodeView
{
    public override Color? TitleBackgroundColor => new Color32(64, 128, 64, 255);
    public override Color? TitleTextColor => new Color(.8f,.8f,.8f);
}
`;
