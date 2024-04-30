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
import CSharpCodeBlock from "@/components/CSharpCodeBlock";

const FlowGraphPage = () => {
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
    const code = `using UnityEngine;
using H8.FlowGraph;
using H8.FlowGraph.NodeTemplate;

[CreateNodeMenu("Player/GainMoney")]
public class PlayerGainMoneyNode : BaseNode, IExecutableNode
{
    [Input]
    public ExecutionFlow Input { get; }

    [Output]
    public ExecutionFlow Output { get; }

    public int moneyToGain;
    [Input(nameof(moneyToGain))]
    public int MoneyToGain => GetInputValue(nameof(MoneyToGain), moneyToGain);

    public void Action(GraphTreeController controller, IBaseAction action) { }

    public void OnEnter(GraphTreeController controller)
    {
        DialogueDatabase.Instance.Player.GainMoney(MoneyToGain);
        controller.ToNextExecutableNode(GetPortData(nameof(Output)), GraphTree);
    }

    public void OnExit(GraphTreeController controller) { }
}`;

    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <div className="px-5 py-3 flex flex-col items-center text-white w-4/5 mx-auto gap-3">
                <div className="text-4xl font-bold py-2 mb-3 border-b-2 w-full">
                    <h1>Flow Graph</h1>
                </div>
                <iframe
                    width="560"
                    height="315"
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
                <div>
                    &emsp;&emsp;a tool for store dialogues into Unity's ScriptableObject, and
                    visualize it on Unity's GraphView, make them easier to read and edit, allow user
                    to create custom Node and Port by script
                </div>
                <div className="w-full">
                    <h3 className="text-2xl">Installation</h3>
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
                <div className="w-full space-y-3">
                    <h3 className="text-2xl">Create Custom Node</h3>
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
                    <Image src={CreateNodeMenuPNG} alt={""} className="mx-auto"></Image>
                    <p>
                        &emsp;&emsp;And a node will look like the image below because we have not
                        defined the port yet.
                    </p>
                    <Image src={NodeWithNoPort} alt={""} className="mx-auto"></Image>
                    <p>
                        &emsp;&emsp;Next, let create port Input port with type{" "}
                        <span className="text-yellow-500">ExecutionFlow </span>
                        by declare Getter name it as "Input" and define Attrbute{" "}
                        <code>
                            &#91;<span className="text-lime-300">Input</span>&#93;
                        </code>{" "}
                        to tell FlowGraph this is a input port.
                    </p>
                    <p>
                        &emsp;&emsp;Declare another port with same type but name it as "Output" and
                        define Attrbute{" "}
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
                        <span className="text-yellow-500">ExecutionFlow </span> port, won't be
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
                        OnEnter() we increase Player's Money and Move To Next Node.
                    </p>
                    <CSharpCodeBlock codeString={code_4} />
                    <p>
                        &emsp;&emsp;We can't read value from MoneyToGain. because we never set value
                        to it. Let imagine when we read data from this port we need to find port
                        that connect to it. Then read data from that port and return it. Otherwise
                        if it not connect to any other it should return default value. But don't
                        worry we have method
                        <code className='px-3'>
                            <span className="text-lime-300">GetInputValue</span>
                            (portName,defaultValue)
                        </code>
                        to do that for us. So we just apply this method to our code.
                    </p>
                    <CSharpCodeBlock codeString={code_5} />
                    <p>
                        &emsp;&emsp;this code is example to show you how to create custom node from
                        a script, keep that in mind every node class need to extend from BaseNode
                        and put CreateNodeMenu Attribute on it, When your node need to use
                        ExecutionFlow. to apply execution order on it. you need to implement
                        IExecutebleNode to NodeClass, when GraphTreeController run to it, OnEnter
                        will have called, OnExit will have called when controller leave, and Action
                        is method to handler input that player send to controller,
                    </p>
                    <p>
                        &emsp;&emsp;to create port, you need to defined public getter and defined
                        attribute &#91;Input&#93; or &#91;Output&#93; depending on port's direction,
                        you can defined InputPort with backingField by define field with same type
                        and defined <code>&#91;Input(backingFieldName)&#93;</code>
                        when node render it will create field beside port, and you can it as default
                        value, we can read data from port by using function{" "}
                        <code>GetInputValue(portName,defaultValue)</code>, this method will find
                        port that connect to it and return value from that port, otherwise if port
                        is not connect to the other it should return defualt value.
                    </p>
                </div>
            </div>
        </>
    );
};

export default FlowGraphPage;
