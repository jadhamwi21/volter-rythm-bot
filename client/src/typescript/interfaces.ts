import React from "react";
import { PAGES } from "../hooks/usePage";
import {
	CommandFlags,
	CommandsAndBaseKeyType,
	Message,
	Messages,
	OptionsType,
	Playback,
	SenderTypes,
	ShortcutCommand,
} from "./types";

export interface PaginatorWrapperProps {
	children: React.ReactNode;
}
export interface PaginatorContextInterface {
	MoveToNextPage: () => void;
	CurrentPage: PAGES;
}

export interface PagesLayoutProps {
	CurrentPage: PAGES | undefined;
	children: React.ReactNode;
}
export interface MapperComponentProps {
	currentPage: PAGES | undefined;
}

export interface BotMessageProps {
	message: bot_message;
}

export interface UserMessageProps {
	message: user_message;
}

export interface PlayerState {
	Playback: Playback;
	Loop: boolean;
	Source: string;
	Volume: number;
}
export interface UserState {
	UserID: string;
	CommandFieldValue: string;
}
export interface MessagesState {
	MessageKey: number;
	ChatMessages: Messages;
}

export interface SetPlaybackPayload {
	playback: Playback;
}
export interface SetSourcePayload {
	source: string;
}
export interface SetLoopPayload {
	loop: boolean;
}

export interface SetCommandPayload {
	commandValue: string;
}
export interface SetUserIdPayload {
	userId: string;
}
export interface StoreMessagePayload {
	message: Message;
}
export interface MutateMessagePayload {
	messageKey: number;
	message: Message;
}
export interface MessageData {
	title: string;
	duration: string;
	thumbnail: string;
	positionInQueue: number;
}

export interface user_message {
	Sender: SenderTypes.User;
	Content: string;
}

export interface bot_message {
	Sender: SenderTypes.Bot;
	Content: string;
	dataWithTheMessage?: MessageData;
}

export interface PlayCommand {
	CommandType: CommandFlags.Play;
	Query: string;
}
export interface PauseCommand {
	CommandType: CommandFlags.Pause;
}
export interface ExitCommand {
	CommandType: CommandFlags.Exit;
}
export interface ResumeCommand {
	CommandType: CommandFlags.Resume;
}
export interface SkipCommand {
	CommandType: CommandFlags.Skip;
}
export interface RepeatCommand {
	CommandType: CommandFlags.Repeat;
}
export interface IncomprehensibleCommand {
	CommandType: CommandFlags.Incomprehensible;
}

export interface MessageMutationInterface {
	messageKey: number;
	message: Message;
}
export interface PlayPostRequestDataModel {
	userSongQuery: string;
	userId: string;
}

export interface MessageAnimationProps {
	Key: any;
	children: React.ReactNode;
}

export interface SkipPutRequestDataModel {
	userId: string;
	autoSkip: boolean;
}
export interface SetVolumePayload {
	volume: number;
}
export interface MenuModalProps {
	toggler: () => void;
}
export interface MenuListProps {
	SelectFavorites: () => void;
	SelectOptions: () => void;
}
export interface OptionsListProps {
	SelectKeyboardShortcuts: () => void;
	SelectCommandsCustomization: () => void;
	selectedOption: OptionsType;
}
export interface OptionDisplayProps {
	SelectedOption: OptionsType;
}

export interface ShortcutsStateInterface {
	AvailableCommands: ShortcutCommand[];
	KeyMap: { [EventName: string]: string[] };
}
export interface AddShortcutThunkPayload {
	Key: string;
	SelectedShortcutCommand: ShortcutCommand;
}

export interface CommandsStateInterface {
	Play: string;
	Pause: string;
	Resume: string;
	Repeat: string;
	Skip: string;
	Exit: string;
	Base: string;
}
export interface MutateCommandKeywordPayload {
	Command: CommandsAndBaseKeyType;
	NewKeyword: string;
}
export interface MutateBasePayload {
	NewBase: string;
}

export interface FavoritesStateInterface {
	Trigger: number;
}
