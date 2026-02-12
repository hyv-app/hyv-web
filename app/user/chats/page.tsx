"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Search, Send, MoreVertical, ArrowLeft } from "lucide-react";

interface Conversation {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  type: "DIRECT" | "GROUP";
  relatedTo?: {
    type: "RENTAL" | "ITEM" | "ACTIVITY";
    title: string;
  };
}

const ChatsPage = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const conversations: Conversation[] = [
    {
      id: "1",
      name: "Rohan Kumar",
      lastMessage: "Sure! I can show you the apartment tomorrow at 5 PM",
      lastMessageTime: "2m ago",
      unreadCount: 2,
      type: "DIRECT",
      relatedTo: {
        type: "RENTAL",
        title: "2BHK Near Metro Station",
      },
    },
    {
      id: "2",
      name: "Priya Sharma",
      lastMessage: "Is the MacBook still available?",
      lastMessageTime: "1h ago",
      unreadCount: 0,
      type: "DIRECT",
      relatedTo: {
        type: "ITEM",
        title: "MacBook Pro 14 M3",
      },
    },
    {
      id: "3",
      name: "Weekend Hiking Group",
      lastMessage: "Kavya: Don't forget to bring water bottles!",
      lastMessageTime: "3h ago",
      unreadCount: 5,
      type: "GROUP",
      relatedTo: {
        type: "ACTIVITY",
        title: "Weekend Hiking Group",
      },
    },
    {
      id: "4",
      name: "Arjun Mehta",
      lastMessage: "Thanks for the quick response!",
      lastMessageTime: "Yesterday",
      unreadCount: 0,
      type: "DIRECT",
      relatedTo: {
        type: "ITEM",
        title: "iPhone 15 Pro Max",
      },
    },
    {
      id: "5",
      name: "Maya Patel",
      lastMessage: "The pottery class was amazing! See you next week",
      lastMessageTime: "2d ago",
      unreadCount: 0,
      type: "DIRECT",
      relatedTo: {
        type: "ACTIVITY",
        title: "Pottery Workshop",
      },
    },
    {
      id: "6",
      name: "Karthik Reddy",
      lastMessage: "Can we negotiate on the price?",
      lastMessageTime: "3d ago",
      unreadCount: 1,
      type: "DIRECT",
      relatedTo: {
        type: "ITEM",
        title: "Royal Enfield Classic 350",
      },
    },
  ];

  const mockMessages = [
    {
      id: "1",
      sender: "them",
      text: "Hi! I'm interested in the apartment you posted",
      time: "10:30 AM",
    },
    {
      id: "2",
      sender: "me",
      text: "Hello! Thanks for reaching out. When would you like to visit?",
      time: "10:32 AM",
    },
    {
      id: "3",
      sender: "them",
      text: "How about tomorrow evening around 5 PM?",
      time: "10:35 AM",
    },
    {
      id: "4",
      sender: "me",
      text: "Sure! I can show you the apartment tomorrow at 5 PM",
      time: "10:36 AM",
    },
  ];

  const selectedConversation = conversations.find((c) => c.id === selectedChat);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getRelatedBadgeColor = (type?: "RENTAL" | "ITEM" | "ACTIVITY") => {
    switch (type) {
      case "RENTAL":
        return "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400";
      case "ITEM":
        return "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400";
      case "ACTIVITY":
        return "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle sending message
      setMessageInput("");
    }
  };

  return (
    <div className="flex flex-col gap-4 -mx-4 lg:-mx-6 -mt-8 md:-mt-10">
      {/* Header */}
      <div className="px-4 lg:px-6 pt-8 md:pt-10 pb-4 border-b bg-background">
        <div className="flex items-center gap-3">
          <MessageCircle className="size-8 text-cyan-600 dark:text-cyan-400" />
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">Chats</h1>
            <p className="text-muted-foreground font-secondary">
              {conversations.reduce((acc, c) => acc + c.unreadCount, 0)} unread messages
            </p>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="flex h-[calc(100vh-16rem)] md:h-[calc(100vh-18rem)]">
        {/* Conversations List */}
        <div
          className={`${
            selectedChat ? "hidden md:flex" : "flex"
          } flex-col w-full md:w-96 border-r bg-card`}
        >
          {/* Search */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-9 rounded-full font-secondary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Conversation Items */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`flex items-start gap-3 p-4 hover:bg-accent cursor-pointer transition-colors border-b ${
                  selectedChat === conversation.id ? "bg-accent" : ""
                }`}
                onClick={() => setSelectedChat(conversation.id)}
              >
                <Avatar className="size-12 shrink-0">
                  <AvatarImage src={conversation.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {getInitials(conversation.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-medium truncate font-secondary">{conversation.name}</span>
                    <span className="text-xs text-muted-foreground shrink-0 font-secondary">
                      {conversation.lastMessageTime}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate font-secondary">
                    {conversation.lastMessage}
                  </p>
                  {conversation.relatedTo && (
                    <div className="mt-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-secondary ${getRelatedBadgeColor(
                          conversation.relatedTo.type
                        )}`}
                      >
                        {conversation.relatedTo.title}
                      </span>
                    </div>
                  )}
                </div>
                {conversation.unreadCount > 0 && (
                  <div className="size-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center shrink-0">
                    {conversation.unreadCount}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className={`${selectedChat ? "flex" : "hidden md:flex"} flex-col flex-1`}>
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b bg-card">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden rounded-full"
                    onClick={() => setSelectedChat(null)}
                  >
                    <ArrowLeft className="size-5" />
                  </Button>
                  <Avatar className="size-10">
                    <AvatarImage src={selectedConversation?.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {getInitials(selectedConversation?.name || "")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium font-secondary">{selectedConversation?.name}</div>
                    {selectedConversation?.relatedTo && (
                      <div className="text-xs text-muted-foreground font-secondary">
                        Re: {selectedConversation.relatedTo.title}
                      </div>
                    )}
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical className="size-5" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
                {mockMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                        message.sender === "me"
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border"
                      }`}
                    >
                      <p className="text-sm font-secondary">{message.text}</p>
                      <span
                        className={`text-xs mt-1 block font-secondary ${
                          message.sender === "me"
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {message.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t bg-card">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2"
                >
                  <Input
                    placeholder="Type a message..."
                    className="flex-1 rounded-full font-secondary"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="rounded-full shrink-0"
                    disabled={!messageInput.trim()}
                  >
                    <Send className="size-4" />
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <div className="hidden md:flex flex-col items-center justify-center h-full gap-4 text-center px-4">
              <div className="size-20 rounded-full bg-muted flex items-center justify-center">
                <MessageCircle className="size-10 text-muted-foreground" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium">Select a conversation</h3>
                <p className="text-muted-foreground max-w-md font-secondary">
                  Choose a conversation from the list to start chatting
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatsPage;
