/**
 * Source https://github.com/yjs/yjs-inspector/blob/main/src/utils.ts
 */
import * as Y from "yjs";

const decoders = [
  {
    name: "binary update",
    decode: async (file: File) => {
      return new Uint8Array(await file.arrayBuffer());
    },
  },
  {
    name: "binary string",
    decode: async (file: File) => {
      const text = await file.text();
      // Parse binary string
      // `Buffer.from(encodeUpdate).toString("binary")`
      return Uint8Array.from(text, (c) => c.charCodeAt(0));
    },
  },
  // TODO handle base64 encoding
  // https://docs.yjs.dev/api/document-updates#example-base64-encoding
];

export async function fileToYDoc(file: File) {
  for (const decoder of decoders) {
    try {
      const yDocUpdate = await decoder.decode(file);
      const newYDoc = new Y.Doc();
      Y.applyUpdate(newYDoc, yDocUpdate);
      Y.logUpdate(yDocUpdate);
      return newYDoc;
    } catch (error) {
      console.warn(`Failed to decode ${decoder.name}`, error);
    }
  }
  throw new Error("Failed to decode file");
}
