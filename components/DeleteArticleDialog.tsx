"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";
import { toast } from "sonner";
import { deleteArticle } from "@/lib/actions/article";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";

function DeleteArticleDialog({ articleId }: { articleId: string }) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeleteArticle = async (id: string) => {
    try {
      setLoading(true);
      await deleteArticle(id);
      toast.success("Article has been deleted");
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Error failed to delete article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete <TrashIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            article.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            onClick={() => handleDeleteArticle(articleId)}
            disabled={loading}
          >
            {loading ? <ScaleLoader color="#ffffff" height={20} /> : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteArticleDialog;
