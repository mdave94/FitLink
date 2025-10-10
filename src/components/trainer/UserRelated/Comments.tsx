import { useState } from "react";
import { Plus, MessageSquare, Trash2, Edit3, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mockComments } from "@/data/mockData";

interface Comment {
  id: string;
  text: string;
  createdAt: Date;
  updatedAt?: Date;
}

interface CommentsProps {
  userId: string;
  userName: string;
}

export const Comments = ({ userId, userName }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>(mockComments);

  const [newComment, setNewComment] = useState("");
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        text: newComment.trim(),
        createdAt: new Date(),
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setIsAddingComment(false);
    }
  };

  const handleDeleteComment = (id: string) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleEditComment = (comment: Comment) => {
    setEditingId(comment.id);
    setEditText(comment.text);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      setComments(
        comments.map((comment) =>
          comment.id === editingId
            ? {
                ...comment,
                text: editText.trim(),
                updatedAt: new Date(),
              }
            : comment
        )
      );
      setEditingId(null);
      setEditText("");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
            <MessageSquare size={20} className="text-blue-400" />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAddingComment(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Add Note</span>
        </motion.button>
      </div>

      {/* Add Comment Form */}
      <AnimatePresence>
        {isAddingComment && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600"
          >
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a note about this user..."
              className="w-full bg-transparent text-white placeholder-slate-400 resize-none focus:outline-none"
              rows={3}
              autoFocus
            />
            <div className="flex justify-end gap-2 mt-3">
              <button
                onClick={() => {
                  setIsAddingComment(false);
                  setNewComment("");
                }}
                className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
              >
                Add Note
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comments List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        <AnimatePresence>
          {comments.map((comment, index) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 hover:bg-slate-700/40 transition-colors"
            >
              {editingId === comment.id ? (
                <div className="space-y-3">
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    autoFocus
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={handleCancelEdit}
                      className="p-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <X size={16} />
                    </button>
                    <button
                      onClick={handleSaveEdit}
                      disabled={!editText.trim()}
                      className="p-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                    >
                      <Check size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-slate-200 text-sm leading-relaxed">
                      {comment.text}
                    </p>
                    <div className="flex items-center gap-1 ml-3 flex-shrink-0">
                      <button
                        onClick={() => handleEditComment(comment)}
                        className="p-1.5 text-slate-400 hover:text-blue-400 transition-colors"
                        title="Edit note"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="p-1.5 text-slate-400 hover:text-red-400 transition-colors"
                        title="Delete note"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{formatDate(comment.createdAt)}</span>
                    {comment.updatedAt && (
                      <span className="text-blue-400">(edited)</span>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {comments.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 text-slate-500"
          >
            <MessageSquare size={32} className="mx-auto mb-3 opacity-50" />
            <p>No notes yet. Add your first note about {userName}.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
